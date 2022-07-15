const password = document.getElementById("password");
const confirmPwd = document.getElementById("confirm-pwd");

const submitBtn = document.querySelector(".sign-up__form__submit");

const errorMessage = document.querySelector(".error-message");

submitBtn.addEventListener("click", function(event){
	if(password.value !== confirmPwd.value){
		event.preventDefault();

		password.classList.add("input-error");
		confirmPwd.classList.add("input-error");
		errorMessage.textContent = "Passwords don't match";
	}
})