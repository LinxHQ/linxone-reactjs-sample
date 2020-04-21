import React from 'react'
import './TbPageNav.scss'

class TbPageNav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    onChangePage = e => {
        if(e.target.innerHTML === "Previous"){
            const e_active = document.getElementsByClassName('tbPageNav_list_btn-active')[0];
            if(e_active.innerHTML === '1'){
                return;
            }
            e_active.classList.remove('tbPageNav_list_btn-active');
            e_active.classList.add('tbPageNav_list_btn');
        }
        if(e.target.innerHTML === "Next"){
            const e_active = document.getElementsByClassName('tbPageNav_list_btn-active')[0];
            if(e_active.innerHTML === '3'){
                return;
            }
            e_active.classList.remove('tbPageNav_list_btn-active');
            e_active.classList.add('tbPageNav_list_btn');
        }
    }

    render() {
        return (
            <div className="tbPageNav_list">
                <span onClick={e => this.onChangePage(e)} className="tbPageNav_list_btn">Previous</span>
                <span onClick={e => this.onChangePage(e)} className="tbPageNav_list_btn-active">1</span>
                <span onClick={e => this.onChangePage(e)} className="tbPageNav_list_btn">2</span>
                <span onClick={e => this.onChangePage(e)} className="tbPageNav_list_btn">3</span>
                <span onClick={e => this.onChangePage(e)} className="tbPageNav_list_btn">Next</span>
            </div>
        )
    }
}

export default TbPageNav;