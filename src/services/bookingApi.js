// Adapter tích hợp backend. Hiện chưa có API nên KHÔNG gửi dữ liệu đi đâu.
// Khi có dịch vụ nhận yêu cầu: bookingAdapter.send = async (values) => { ...; return { delivered: true }; }
export const bookingAdapter = { send: null };

export async function submitBooking(values) {
  if (typeof bookingAdapter.send === 'function') {
    const res = await bookingAdapter.send(values);
    return { delivered: Boolean(res?.delivered) };
  }
  return { delivered: false };
}
