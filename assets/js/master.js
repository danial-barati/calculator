let _func = document.querySelectorAll('.func')
        let _child = document.getElementById('unset')
        let outp = ''
        let sum  = ''
        let _span = ''
        _func.forEach((val, i) => {
            val.addEventListener('click',()=>{
            let btn = val.getAttribute('data-calc')
            
            for (let index = 0; index < _func.length; index++) {
                if (i != index) {
                    _func[index].style.backgroundColor='#1e2024'
                    _func[index].style.color='whitesmoke'
                    
                }else{
                    val.style.backgroundColor='whitesmoke'
                    val.style.color='black'
                }
                
            }

            switch (btn) {
                case '+':
                    outp = '+'
                    break;
                case '-':
                    outp = '-'
                    break;
                case '*':
                    outp = '*'
                    break;
                case '/':
                    outp = '/'
                    break;

                    return outp
            }
            })
        });

        document.getElementById('sum').addEventListener('click',()=>{
            let num1 = Number(document.getElementById('num1').value)
            let num2 = Number(document.getElementById('num2').value)
                if (outp != '') {
                    if (num1 != '' || num2 != '') {
                        switch (outp) {
                            case '+':
                                sum = num1 + num2
                                break;
                            case '-':
                                sum = num1 - num2
                                break;
                            case '*':
                                sum = num1 * num2
                                break;
                            case '/':
                                sum = num1 / num2
                                break;
                        }
                        if (_child.getAttribute('data-status') == 'off') {
                            _span = document.createElement('span')
                        }
                        _span.innerHTML = sum
                        _span.style.color='whitesmoke'
                        _child.appendChild(_span)
                        _child.setAttribute('data-status','on')
                        document.getElementById('num1').value = null
                        document.getElementById('num2').value = null
                        outp = ''

                        _func.forEach((val) => {
                            val.style.backgroundColor='#1e2024'
                            val.style.color='whitesmoke'
                        });
                    }else{
                        alert('null value')
                    }
                } else {
                    alert('null function')
                }
        })