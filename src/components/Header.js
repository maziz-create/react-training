/*
 kural => component ismi CamelCase yazılır. Çünkü biz bunları app.jsde kullanacağız. orada bazen html'i de render ettiğimiz için
 header ile Header karışmamalı!
 baş harfi küçük olan header => html etiketi olarak render edilirken (react => App.js tarafından)
 baş harfi Büyük olan Header => bizim yazdığımız component olarak render ediliyor. (react => App.js tarafından)
*/
function Header() {
    return <div>Merhaba Ben Header Bileşeniyim.</div>
}

// dışa aktarıyoruz
export default Header;