exports.Loginpage= class Loginpage
{
    constructor(page)
    {
       this.page=page
         this.username_textbox=page.getByRole('textbox',{name:'username'})
       this.password_testbox=page.getByRole('textbox',{name:'password'})
       this.login_button=page.getByRole('button',{name:'Login'})

}
async Loginurl()
{
   await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}
async login(username,Password)
{
    await this.username_textbox.fill(username);
    await this.password_testbox.fill(Password);
    await this.login_button.click();
}
}