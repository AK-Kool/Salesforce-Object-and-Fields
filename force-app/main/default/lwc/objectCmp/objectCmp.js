import { LightningElement, track } from 'lwc';

export default class ObjectCmp extends LightningElement 
{
    // private variables
    _isTyping = false;
    _isClickedCombobox = false;

    //public variables
    @track inputValue = '';

    get getDropdownClass()
    {
        // area is clicked or typed something then show dropdown.
        return (this._isClickedCombobox || this._isTyping) ? 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open' : 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click';
    }
    get _getInputValue()
    {
        return this.inputValue;
    }

    handleOnClick()
    {
        this._isClickedCombobox = true;
    }
    handleOnInput(event)
    {
        //console.log(event.target.value.trim());
        if(event.target.value.trim() !== '')
        {
            this.inputValue = this.template.querySelector('[id="combobox-id-4"]').value;
            console.log(' AK - ' + this.template.querySelector('[id="combobox-id-4"]').value);
            this._isTyping = true;
        }
        else
        {
            console.log(`Please Enter a Valid String Spaces are not allowed.`);
            // close dropdown
            this._isClickedCombobox = this._isTyping = false;
        }
    }
    handleOnBlur()
    {
        // clear all values
        this._isTyping = this._isClickedCombobox = false;
        this.inputValue = '';
        console.log(`1 ${this._isTyping} 2 ${this._isClickedCombobox}`);
    }
}