import { defineStore } from "pinia";

export const SystemValuesStore = defineStore('SystemValues',{
    state() {
        return{
            isTyping: false,
            sidebarExtended:false,
        }
    },
    getters:{
        getIsTyping():boolean { //return isTyping value
            return this.isTyping;
        },
        getSidebarExtended():boolean{ // return sidebarExtended value
            return this.sidebarExtended;
        }
    },
    actions:{
        setIsTyping(payload:boolean):void{ // set isTyping value
            this.isTyping = payload;
        },
        setSidebarExtended():void{ // set sidebarExtended value
            this.sidebarExtended = ! this.sidebarExtended;
        }
    }
})