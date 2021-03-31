# ⚽ Club Finder

Aplikasi pencarian Klub Bola yang dibuat berdasarkan tutorial [Belajar Fundamental Front-End Web Development](https://www.dicoding.com/academies/163/).

<p>✔️ Sintaks ES6</p>
<p>✔️ Web Component</p>
<p>✔️ Node Package Manager</p>
<p>✔️ Webpack</p>
<p>✔️ Asynchronous JavaScript Request</p>

## 🧬 Sintaks ES6

Ciri khas sintaks ini adalah penggunaan variabel `const` dan `let`. Misalnya pada potongan kode fungsi main.

```javascript
const main = () => {
    const searchElement = document.querySelector("search-bar");
    ...
}

```
Dari yang sebelumnya, membuat fungsi hanya seperti ini

```javascript

function main(){
	var searchElement = document.querySelector("search-bar");
	...
}
````
Kemudian, ada juga sintaks template literal (memudahkan menggabungkan html dan variabel)

```javascript

element.innerHTML += `
	<img class="fan-art-club" src="${this._club.strTeamBadge}" alt="Fan Art">
	<div class="club-info">
		<h2>${this._club.strTeam}</h2>
		<p>${this._club.strDescriptionEN}</p>
	</div>
`

````

## ✒️ Web Component

Dijelaskan juga cara membuat Web Component. Pertama saya pikir membuat custom html component harus menggunakan framework seperti VueJS atau React, ternyata bisa tanpa framework. Tetapi memang caranya jadi lebih panjang. Meskipun begitu, sangat penting untuk mengetahui cara kerjanya secara native.
Kita harus membuat class yg mewarisi `HTMLElement` sehingga elemen baru memiliki method method html pada umumnya.

```javascript
class AppBar extends HTMLElement {
	render(){
		element.innerHTML = `<h2>Club Finder</h2>`
	}
}
````

Di akhir ditambahkan kode untuk menetapkan nama custom element-nya

```javascript
customElements.define('app-bar', AppBar)
```

Setelah itu sudah bisa dipakai element html `<app-bar></app-bar>`

## 📦 Node Package Manager

Menggunakan NPM seperti biasa. Yang penting dapat membedakan mana plugin yang digunakan hanya untuk development, dan mana yang digunakan untuk produksi.

```javascript
  "devDependencies": {
    "@babel/core": "^7.13.14",
    "@babel/preset-env": "^7.13.12",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.2.0",
    "html-webpack-plugin": "^5.3.1",
    "style-loader": "^2.0.0",
    "webpack": "^5.28.0",
    "webpack-cli": "^4.6.0",
    "webpack-dev-server": "^3.11.2",
    "webpack-merge": "^5.7.3"
  },
  "dependencies": {
    "regenerator-runtime": "^0.13.7"
  }
````

## 🗳️ Webpack

Banyak hal baru yang saya pelajari tentang webpack, karena biasanya dipakai di framework tetapi saya tidak tahu asal muasal penggunaannya 😂. Karena webpack, ternyata saya bisa menggunakan `npm run serve` yang akan menjalankan webpack dev server, atau menggunakan command `npm run build` untuk membundle seluruh javascript supaya menjadi lebih efisien dan tambahan plugin yang dapat menerjemahkan javscript ke bahasa yang didukung banyak browser.

## 🔗 Asynchronous JavaScript Request

Permasalahan yang sering saya hadapi dengan _Asynchronous JavaScript Request_ adalah satu fungsi yang berjalan terlebih dahulu, padahal memerlukan data dari api. 

```javascript
const onButtonSearchClicked = async() => {
    try {
        const result = await DataSource.searchClub(searchElement.value);
        renderResult(result);
    } catch(msg){
        console.log(msg)
        fallbackResult(msg)
    }
...
```

Supaya menunggu respon dari api sebelum merender data, bisa dipakai `async` dan `await` 👍.

## 🖼️ Screenshot

![](https://raw.githubusercontent.com/jhonarendra/club-finder/master/screenshot/1.gif)


> Metode pengembangan front end web seperti ini sangat rapi dan terorganisir (hampir sama dengan framework js), sehingga memudahkan kita untuk mengembangkan aplikasi.
