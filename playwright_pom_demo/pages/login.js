exports.Loginpage= class loginpage{
constructor(page){
    this.page=page
this.username_textbox=page.getByRole('textbox', { name: 'Username' })
this.password_textbox=page.getByRole('textbox', { name: 'Password' })
this.login_button=page.getByRole('button', { name: 'Login' })
}
async login(Username,Password)
{
    await this.username_textbox.fill(Username)
    await this.password_textbox.fill(Password)
    await this.login_button.click()
}
async pagegoto(){
    await this.page.goto('https://the-internet.herokuapp.com/login');

}

}