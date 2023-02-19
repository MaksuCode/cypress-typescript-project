export class NavBar{

    private readonly home = '[show-authed="true"] > :nth-child(1) > .nav-link';
    private readonly newArcticle = '[show-authed="true"] > :nth-child(2) > .nav-link';
    private readonly settings = '[show-authed="true"] > :nth-child(3) > .nav-link';
    private readonly account = ':nth-child(4) > .nav-link';

    click(menuItem : string){
        switch(menuItem) { 
            case 'home': { 
               cy.get(this.home).click(); 
               break; 
            } 
            case 'newArticle': { 
                cy.get(this.newArcticle).click(); 
                break; 
            }
            case 'settings': { 
                cy.get(this.settings).click(); 
                break; 
            }
            case 'account': { 
                cy.get(this.account).click(); 
                break; 
            }    
            default: { 
                break; 
            } 
         } 
    }


}

