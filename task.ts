    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        public id: string;
        public type:HtmlType;
        constructor(
           {  id,
             type,}:HtmlDocument
        ) {
            this.id = id!;
            this.type = type!;
        }
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;
        id: string;
        constructor(
            {value,
            placeholder,
            id}: HtmlDocument
        ) {
            this.id = id!;
            this.placeholder = placeholder!;
            this.value = value!
        }
    }

    class InputEvents {
        public value: string; 
        public placeholder: string;
        public id: string;
        constructor( {value, placeholder, id}: HtmlDocument ) {
            this.value = value!
            this.placeholder = placeholder!
            this.id = id!;
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface HtmlDocument {
         id?: string;
         type?: HtmlType;
         value?: string;
         placeholder?: string;
    }


    //? Idea para la nueva clase InputElement
    class ImputElements {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;
        constructor({
            id,
            type,
            value,
            placeholder
        }: HtmlDocument){
            this.htmlElement = new HtmlElement({id,type});
            this.inputAttributes = new InputAttributes({value, placeholder,id});
            this.inputEvents = new InputEvents({value, placeholder, id});
        }
    }

    const nameField = new ImputElements({id:'Fernando',type:'input',value:'Enter first name', placeholder:'txtName'});

    console.log({ nameField });