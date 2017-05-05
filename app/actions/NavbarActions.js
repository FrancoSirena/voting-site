import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
    constructor() {
        this.generateActions(
            'updateOnlineUsers',
            'updateAjaxAnimation',
            'getCharacterCountSuccess',
            'getCharacterCountFail',
            'findCharacterSucess',
            'findCharacterFail'
        );
    }

    findCharacter(payload) {
        $.ajax({
            url: '/api/characters/search',
            data: {name: payload.searchQuery}
        })
        .done((done) => {
            assign(payload, data);
            this.actions.findCharacterSuccess(payload);
        })
        .fail(()=>{
            this.actions.findCharacterFail(payload);
        });
    }
    getCharacterCount() {
        $.ajax({ url: '/api/characters/count' })
        .done((data) => {
            this.actions.getCharacterCountSuccess(data)
        })
        .fail((jqXhr) => {
            this.actions.getCharacterCountFail(jqXhr)
        });
    }
}

export default alt.createActions(NavbarActions);