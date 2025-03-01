function createCalculator () {
    return {
        display: document.querySelector('.display'),
             
        clearDisplay() {
            this.display.value = '';
        },
      
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1); //tamanho da string menos 1

        },
        
        makeCount() {
            //eval('') avalia a string e tenta executar como código javascript.
            //permite scrits maliciosos que pode inferir no código; (executa quqalquer codigo Javascript)
            let conta = this.display.value;

            try {
                
                conta = eval(conta);

                if(!conta) {
                    alert('Conta Inváĺida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e){

                alert('Conta Inválida!')
                return;
            }
        },
            
        start() {
            this.clickButton();
            this.pressEnter();
          
        },
        
        pressEnter() {

            this.display.addEventListener('keyup', e => {

                if(e.key === 'Enter') {

                    this.makeCount();
                }

            })

        },


        clickButton() {
            // thiss -> calculator
            document.addEventListener('click', (e) => { //aqui o this muda
                //quem chamou a funcão é o THIS.

                const el = e.target;
                
                if(el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {

                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){

                    this.deleteOne();
                }
                if (el.classList.contains('btn-eq')){

                    this.makeCount();

                }
            }); //falando pra função para usar outro THIS
        },
        btnToDisplay(value) {
            this.display.value += value;
        }

    };




};

const calculator = createCalculator();
calculator.start();