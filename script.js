function getToday () {
	let today = new Date()
	const dd = String(today.getDate() + 2).padStart(2, '0')
	const mm = String(today.getMonth() + 1).padStart(2, '0')
	const yyyy = today.getFullYear()

	return `${mm}-${dd}-${yyyy}`
}

let formContent = `
<form id="form">
	<input type="text" name="username" id="username" placeholder="Usuario">
	<input type="email" name="email" id="email" placeholder="Correo">
	<input type="password" name="pass" id="pass" placeholder="Contraseña">
	<button type="submit">Inscribirse</button>
	<p>¿Tienes una cuenta? <a href="#">Inicie sesión aquí</a></p>
</form>`

window.addEventListener("load", () => {
	let date = document.getElementById("insertDate")
	let form = document.getElementById("form")
	form.innerHTML = formContent

	form.addEventListener("submit", (e) => {
		e.preventDefault()
		let username = document.getElementById("username")
		let email = document.getElementById("email")

		alert(`Bienvenido "${username.value}"! se ha creado tu cuenta correctamente, con tu correo "${email.value}"`)
	})

	let newDate = getToday()

	date.innerHTML = newDate
})