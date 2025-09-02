import {expect, test} from '@playwright/test'
import {login} from '../pom/login'
import {Home} from '../pom/homePage'
// method for login
test('Daraz',async({page}) =>{ 
    //login page  
    const  Login = new login(page)
    await Login.goToLoginpage(page)
    await Login.login_page('ashishpoudel.2015@gmail.com' , 'Admin@123' )
    
    //home page 
    const HomePage = new Home(page)
    await HomePage.home('iphone')
    // await page.getByAltText
    await HomePage.addToCart('Apple iPhone 15 | 6.1" Super Retina XDR display | A16 Bionic Chipset | 48MP Main Camera with 2X Telephoto')
    // await page.waitForTimeout(10000)
    // await HomePage.gotoCart()
})
