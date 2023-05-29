const { createApp } = Vue

createApp({
    data(){
        return{
            mailArray: []       //array per mail
        }
    }
    ,mounted(){
        for (let index = 0; index < 10; index++) {   //ciclo richiesta api
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((response) => {
                this.mailArray.push(response.data.response)  //pusho risposta in array
            })
            
        }

    }
}).mount('#app');


