// Tạo Vue app
const app = Vue.createApp({
    template: '<h2>Hello {{ name }}</h2>',
});

// Mount app đó vào 1 phần cố định trên website (obj có id = app)
/// Lúc này Vue chỉ có quyền modify obj đã đc mount
app.mount('#app');