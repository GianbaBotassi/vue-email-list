const { createApp } = Vue

createApp({
    data(){
        return{
            mailArray: []
        }
    }
    // ,methods:{
    //     ciclo(){
    //         for(let i = 0; i<10;i++){
    //             this.mailArray.push('ciao')
    //             console.log(this.mailArray);
    //         }
    //     }
    // }
    ,mounted(){
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((response) => {
                console.log(response.data.response);
                this.mailArray.push(response.data.response)
            })
            
        }

    }
}).mount('#app');


