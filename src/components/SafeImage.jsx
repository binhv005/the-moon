import { useState } from 'react';

// Ảnh có width/height để tránh layout shift và trạng thái dự phòng khi ảnh lỗi.
export default function SafeImage({ src, alt, w, h, priority = false, className = '', style, ...rest }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className={`img-fallback ${className}`} style={{ aspectRatio: w && h ? `${w}/${h}` : undefined, ...style }} role="img" aria-label={alt} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      style={style}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
