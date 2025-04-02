// Lấy tất cả nút tab và các đơn hàng
const tabButtons = document.querySelectorAll('.tab-button');
const orders = document.querySelectorAll('.order');

// Lặp qua từng nút tab
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Xóa class 'active' khỏi tất cả nút
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Thêm class 'active' cho nút vừa bấm
    button.classList.add('active');
    
    // Lấy giá trị trạng thái từ data-tab
    const filterStatus = button.getAttribute('data-tab');
    
    // Lọc đơn hàng
    orders.forEach(order => {
      // Nếu bấm "Tất cả" hoặc order.status khớp với filterStatus thì hiển thị
      if (filterStatus === 'all' || order.getAttribute('data-status') === filterStatus) {
        order.style.display = 'block';
      } else {
        order.style.display = 'none';
      }
    });
  });
});
