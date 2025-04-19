class UserContainer extends HTMLElement{
    constructor(){
        super()
        const shadow=this.attachShadow({mode:"open"})

        shadow.innerHTML=`
        <style>
        h1{
         color:blue;
        }
         p{
         color:green;
         }

        </style>
        <h1>Hi, I m Suman kumar</h1>
        <p>✅I m a Full stack developer 👀</h1> `
    }
}
customElements.define('user-container',UserContainer);


//user card

class UserCard extends HTMLElement{
     list=[
        {name:"Suman kumar",avatar:"https://placehold.co/50x50"},
        {name:"AMit Poddar",avatar:"https://placehold.co/50x50"},
        {name:"Rubi kumari",avatar:"https://placehold.co/50x50"},
        {name:"Krishn poddar",avatar:"https://placehold.co/50x50"}
    ]
    static get observedAttributes(){
        console.log("Hi i m observing the Attribute")
       return['name','avatar']
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.render()
    }

    attributeChangeCallback(name,oldVal,newVal){
        if(oldVal !== newVal) this.render();
    }

    render(){
      this.shadowRoot.innerHTML=
      this.list.map((value)=>`
      <div part="card">
       <img part="img" src="${value.avatar}"/>
       <p>${value.name}</p>
       </div>
      `);
    }
}
customElements.define('user-card',UserCard)


//user details

class UserDetails extends HTMLElement{
    static get observedAttributes(){
        return['name','details']
    }
    constructor(){
        super()
        this.attachShadow({mode:"open"});
    }
    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(name,oldVal,newVal){
        if(oldVal !== newVal){
           this.render();
        }
    }
    render(){
        this.shadowRoot.innerHTML=`<style>
        h5{
        color:orange;
        }
        p{
        color:blue;
        }
        </style>
        <div>
        <h5>${this.getAttribute('name')}</h5>
        <p>${this.getAttribute('details')}</p>
        </div>
        `
    }
}
customElements.define("user-details",UserDetails);


class UserAddress extends HTMLElement{
    static get observedAttributes(){
        return['home','phase','state','pin']
    }
   constructor(){
    super();
    this.attachShadow({mode:'open'})
   }
   connectedCallback(){
    this.render()
   }
   attributeChangeCallback(name,oldVal,newVal){
       if(oldVal !== newVal){
        this.render()
       }
   }
   render(){
    this.shadowRoot.innerHTML=`
    <style>
    h1{
    color:green;
    }
    p{
    color:gray}
    </style>
     <h1>Address</h1>
    <p>${this.getAttribute('home'),this.getAttribute('phase'),this.getAttribute('state'),this.getAttribute('pin')}</p>
    `
   }
}
customElements.define('user-address',UserAddress)