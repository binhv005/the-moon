import { useEffect, useState } from 'react';

// Trả về id section đang xem: section cuối cùng có đỉnh đã vượt qua dưới header.
// Các section không nằm trong menu (cơ sở, quy trình, đặt phòng) thuộc về mục menu phía trước.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const line = 140; // gần dưới header sticky
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // Cuối trang: luôn đánh dấu mục cuối.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = ids[ids.length - 1];
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ids]);

  return active;
}
