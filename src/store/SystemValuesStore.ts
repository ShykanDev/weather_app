import { defineStore } from "pinia";

export const SystemValuesStore = defineStore('SystemValues',{
    state() {
        return{
            isTyping: false,
            sidebarExtended:false,
            editMode: false,
            fullForecastDataLoaded: false
        }
    },
    getters:{
        getIsTyping():boolean { //return isTyping value
            return this.isTyping;
        },
        getSidebarExtended():boolean{ // return sidebarExtended value
            return this.sidebarExtended;
        },
        getEditMode():boolean{ // return editMode value
            return this.editMode;
        },
        getFullForecastDataLoaded():boolean{ // return fullForecastDataLoaded value
            return this.fullForecastDataLoaded;
        }
    },
    actions:{
        setIsTyping(payload:boolean):void{ // set isTyping value
            this.isTyping = payload;
        },
        setSidebarExtended():void{ // set sidebarExtended value
            this.sidebarExtended = ! this.sidebarExtended;
        },
        setEditMode():void{ // set editMode value
            this.editMode = !this.editMode;
        },
        setFullForecastDataLoaded(payload:boolean):void{ // set fullForecastDataLoaded value
            this.fullForecastDataLoaded = payload;
        }
    }
})