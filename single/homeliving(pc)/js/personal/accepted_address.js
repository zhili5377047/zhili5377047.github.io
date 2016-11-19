window.onload = function () {
    var dd = document;
    var oUl = dd.querySelector('.main ul');
    var oLi = oUl.children;
    for (var i = 0, len = oLi.length; i < len; i++) {
    oLi[i].index = i;
    oLi[i].onclick = function () {
            console.log(this.index)
            if (oLi[this.index].className !== '') {
                return false;
            }
            for (var j = 0; j < len; j++) {
                oLi[j].className = '';
                oLi[j].children[3].className = 'right_coner'

            }
            oLi[this.index].className = 'choose_this';
            oLi[this.index].children[3].className ='chosen right_coner';
        }
    }
    var add_class = dd.querySelector('.add_address');
    var reverse_address = dd.querySelector('#reverse_address');
    add_class.onclick = function () {
        reverse_address.style.display = 'block';
    }
    var save = reverse_address.querySelector('.save');
    save.onclick = function () {
        reverse_address.style.display = 'none';
    }
}