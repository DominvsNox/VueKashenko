const question1 = {
    selected: '',
    options:[
        {id:1, text:"откуда на Беларусь"},
        {id:2, text:"кто где соснул"},
        {id:3, text:"х..й"}
    ]
}

const question2 = {
    selected: '',
    options: [
        {id:1, text: "рагу из русских младенцев", url: "img/icons8-babys-room-64.png"},
        {id:2, text: "нападение", url: "img/icons8-fire-64.png"},
        {id:3, text: "отступление", url: "img/icons8-pacifier-64.png"}
    ]
}

const question3 = {
    selected: '___',
    options: [
        
    ]
    
}

const question4 = {
    preventiveStrike: '',
    positions: '',
    options: ["2 позиции", "3 позиции", "4 позиции"]
}

const question5 = {
    selected: '',
    options: [
        {id: 1, text: "жёпу"},
        {id: 2, text: "карту я привез"},
        {id: 3, text: "х..й"}
    ]
}

const question6 = {
    selectedR: 'мордора',
    selectedB: 'изенгарда'
    
}

const question7 = {
                selected: '',
                options: [
                    {id: 1, text: "нах..я"},
                    {id: 2, text: "нах..яренные"},
                    {id: 3, text: "на учениях"}
                ]
}

const question8 = {
    values:[
    {id:1, selected: "", text: "шнурки"},
    {id:2, selected: "", text: "х..йню"},
    {id:3, selected: "", text: "эту войну"},
    {id:4, selected: "", text: "спецоперацию"},
    {id:5, selected: "", text: "у нас совесть чиста"}
    ],

    result: ""

}

const question9 = {
    values:[
        {id:1, selected: true, text: "Звісно!"},
        {id:2, selected: true, text: "Авжеж!"},
        {id:3, selected: true, text: "Ла-ла-ла-ла-ла!"}
    ]
}

Vue.createApp({
    data()
    {
        return {
            question1,
            question2,
            question3,
            question4,
            question5,
            question6,
            question7,
            question8,
            question9,
            message: ""
        }
    },
    beforeMount(){
        {
            let numbers = new Array(6);
            let startHours = 5;
            for(let i=0; i<numbers.length; i++){
                numbers[i] = startHours;
                this.question3.options.push({
                    number:numbers[i],
                    value:i+5
                })
                startHours++;
            }
        }
    },
    methods:
    {
        resultIt(){
            this.resultOfQuestion8();
            this.message = `    А я вам сейчас покажу ${question1.selected} готовилось ${question2.selected}. 
    И, если бы за ${question3.selected} часов до операции не был нанесен ${question4.preventiveStrike}
    по позициям: ${question4.positions}, я щас покажу ${question5.selected}, 
    они бы атаковали наши войска ${question6.selectedR}, ${question6.selectedB}, 
    которые были ${question7.selected}. Поэтому не мы развязали ${question8.result}. 
    путин xyul0 в любом случае :))`;
        },

        resultOfQuestion8(){
            question8.result = question8.values.map((val) => {if(val.selected) return val.text} )
        }
    }
}).mount("#main")