import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Phone } from 'lucide-react';
import { CONTACT } from '../data/contact.js';
import { properties } from '../data/properties.js';
import { submitBooking } from '../services/bookingApi.js';
import { on } from '../utils.js';
import Button from './Button.jsx';

const EMPTY = { name: '', phone: '', property: '', checkIn: '', checkOut: '', guests: '', roomType: '', note: '' };
const PHONE_RE = /^(\+?84|0)\d{9,10}$/;

const todayStr = () => {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

export function validate(v, today = todayStr()) {
  const e = {};
  if (!v.name.trim()) e.name = 'Vui lòng nhập họ và tên.';
  const phone = v.phone.replace(/[\s.\-()]/g, '');
  if (!phone) e.phone = 'Vui lòng nhập số điện thoại.';
  else if (!PHONE_RE.test(phone)) e.phone = 'Số điện thoại chưa đúng định dạng (ví dụ: 0933 309 981).';
  if (!v.property) e.property = 'Vui lòng chọn cơ sở muốn đặt.';
  if (v.checkIn && v.checkIn < today) e.checkIn = 'Ngày nhận phòng không được trước ngày hôm nay.';
  if (v.checkOut && v.checkOut < today) e.checkOut = 'Ngày trả phòng không được trước ngày hôm nay.';
  else if (v.checkIn && v.checkOut && v.checkOut <= v.checkIn) e.checkOut = 'Ngày trả phòng phải sau ngày nhận phòng.';
  if (v.guests !== '' && !(Number.isInteger(Number(v.guests)) && Number(v.guests) >= 1)) e.guests = 'Số lượng khách phải là số nguyên từ 1 trở lên.';
  return e;
}

export default function BookingForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | unconnected | sent | error
  const [copied, setCopied] = useState('idle');
  const busy = useRef(false);

  // Điền sẵn cơ sở / phòng khi khách bấm "Yêu cầu đặt phòng" ở nơi khác.
  useEffect(() => on('moon:property', (id) => setValues((s) => ({ ...s, property: id }))), []);
  useEffect(() => on('moon:room', (name) => setValues((s) => ({ ...s, roomType: name || s.roomType }))), []);

  const set = (key) => (e) => {
    setValues((s) => ({ ...s, [key]: e.target.value }));
    if (errors[key]) setErrors((s) => ({ ...s, [key]: undefined }));
  };

  const summary = () => {
    const p = properties.find((x) => x.id === values.property);
    const lines = ['Yêu cầu đặt phòng – The Moon', `Họ và tên: ${values.name.trim()}`, `Số điện thoại: ${values.phone.trim()}`, `Cơ sở: ${p?.name ?? ''}`];
    if (values.checkIn) lines.push(`Ngày nhận phòng: ${values.checkIn}`);
    if (values.checkOut) lines.push(`Ngày trả phòng: ${values.checkOut}`);
    if (values.guests) lines.push(`Số lượng khách: ${values.guests}`);
    if (values.roomType.trim()) lines.push(`Loại phòng mong muốn: ${values.roomType.trim()}`);
    if (values.note.trim()) lines.push(`Ghi chú: ${values.note.trim()}`);
    return lines.join('\n');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    const err = validate(values);
    setErrors(err);
    const first = Object.keys(err)[0];
    if (first) {
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    busy.current = true;
    setStatus('sending');
    try {
      const { delivered } = await submitBooking(values);
      setStatus(delivered ? 'sent' : 'unconnected');
    } catch {
      setStatus('error');
    } finally {
      busy.current = false;
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary());
      setCopied('ok');
    } catch {
      setCopied('fail');
    }
  };

  if (status === 'sent') {
    return (
      <div className="form-result" role="status">
        <h3>Đã gửi yêu cầu</h3>
        <p>The Moon sẽ liên hệ lại để xác nhận tình trạng phòng và giá. Yêu cầu này chưa phải là xác nhận đặt phòng.</p>
      </div>
    );
  }

  if (status === 'unconnected') {
    return (
      <div className="form-result" role="status">
        <h3>Biểu mẫu chưa được kết nối</h3>
        <p className="notice notice--block">Yêu cầu của bạn CHƯA được gửi đến homestay. Vui lòng gọi điện trực tiếp hoặc sao chép nội dung bên dưới để gửi qua kênh liên hệ.</p>
        <pre className="form-result__summary">{summary()}</pre>
        <div className="form-result__actions">
          {CONTACT.phones.map((p) => (
            <Button key={p.display} icon={Phone} href={p.tel}>
              Gọi {p.display}
            </Button>
          ))}
          <Button variant="secondary" icon={copied === 'ok' ? Check : Copy} onClick={copy}>
            {copied === 'ok' ? 'Đã sao chép' : 'Sao chép nội dung'}
          </Button>
        </div>
        {copied === 'fail' && <p className="field__error">Không thể sao chép tự động. Hãy chọn và sao chép nội dung phía trên.</p>}
        <button type="button" className="link-btn" onClick={() => (setStatus('idle'), setCopied('idle'))}>
          Chỉnh sửa thông tin
        </button>
      </div>
    );
  }

  const field = (key, label, control, required = false) => (
    <div className={`field ${errors[key] ? 'field--error' : ''}`}>
      <label htmlFor={`f-${key}`}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="field__opt"> (tùy chọn)</span>}
      </label>
      {control}
      {errors[key] && (
        <p className="field__error" id={`f-${key}-err`}>
          {errors[key]}
        </p>
      )}
    </div>
  );
  const a = (key, required) => ({ id: `f-${key}`, 'aria-invalid': Boolean(errors[key]), 'aria-describedby': errors[key] ? `f-${key}-err` : undefined, 'aria-required': required || undefined });
  const today = todayStr();

  return (
    <form className="booking-form" onSubmit={onSubmit} noValidate>
      <div className="booking-form__grid">
        {field('name', 'Họ và tên', <input {...a('name', true)} type="text" autoComplete="name" value={values.name} onChange={set('name')} />, true)}
        {field('phone', 'Số điện thoại', <input {...a('phone', true)} type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} />, true)}
        {field(
          'property',
          'Cơ sở muốn đặt',
          <select {...a('property', true)} value={values.property} onChange={set('property')}>
            <option value="">Chọn cơ sở</option>
            {properties.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>,
          true,
        )}
        {field('guests', 'Số lượng khách', <input {...a('guests')} type="number" min="1" step="1" inputMode="numeric" value={values.guests} onChange={set('guests')} />)}
        {field('checkIn', 'Ngày nhận phòng', <input {...a('checkIn')} type="date" min={today} value={values.checkIn} onChange={set('checkIn')} />)}
        {field('checkOut', 'Ngày trả phòng', <input {...a('checkOut')} type="date" min={values.checkIn || today} value={values.checkOut} onChange={set('checkOut')} />)}
        {field('roomType', 'Loại phòng mong muốn', <input {...a('roomType')} type="text" value={values.roomType} onChange={set('roomType')} />)}
      </div>
      {field('note', 'Ghi chú thêm', <textarea {...a('note')} rows="4" value={values.note} onChange={set('note')} />)}
      {status === 'error' && (
        <p className="field__error" role="alert">
          Đã có lỗi xảy ra. Vui lòng thử lại hoặc gọi điện trực tiếp cho homestay.
        </p>
      )}
      <button type="submit" className="btn btn--primary booking-form__submit" disabled={status === 'sending'}>
        <span>{status === 'sending' ? 'Đang gửi…' : 'Gửi yêu cầu đặt phòng'}</span>
      </button>
    </form>
  );
}
