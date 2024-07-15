import { defineStore } from "pinia";

export const SystemValuesStore = defineStore('SystemValues',{
    state() {
        return{
            isTyping: false
        }
    },
    getters:{
        getIsTyping():boolean {
            return this.isTyping;
        }
    },
    actions:{
        setIsTyping(payload:boolean):void{
            this.isTyping = payload;
        },
    }
})