document.addEventListener('DOMContentLoaded', function () {
  const addBtn = document.querySelector('.Themdiachi');
  
  addBtn.addEventListener('click', function () {
    // Tạo khối mới với class "from-use"
    const newAddressForm = document.createElement('div');
    newAddressForm.classList.add('from-use');
    
    // Nội dung HTML của form mới (bạn có thể tùy chỉnh lại)
    newAddressForm.innerHTML = `
      <form>
        <label>Địa chỉ</label>
        <input type="text" placeholder="Nhập địa chỉ">
  
        <label>Tên</label>
        <input type="text" placeholder="Nhập tên">
  
        <label>Email</label>
        <input type="email" placeholder="Nhập email">
  
        <label>Số Điện Thoại</label>
        <input type="text" placeholder="Nhập số điện thoại">
      </form>
    `;
    
    // Thêm form mới vào cuối main.content
    const content = document.querySelector('.content');
    content.appendChild(newAddressForm);
  });
});
