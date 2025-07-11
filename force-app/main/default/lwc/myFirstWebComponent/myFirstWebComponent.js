import { LightningElement, track } from 'lwc';
export default class MyFirstWebComponent extends LightningElement {
    @track
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
        {
            Id: 4,
            Name: 'David Smith',
            Title: 'CTO',
        },
        {
            Id: 5,
            Name: 'Sarah Johnson',
            Title: 'CFO',
        },
        {
            Id: 6,
            Name: 'Emily Davis',
            Title: 'COO',
        },
        {
            Id: 7,
            Name: 'James Brown',
            Title: 'CMO',
        },
        {
            Id: 8,
            Name: 'Linda Garcia',
            Title: 'VP of Marketing',
        },
    ];
}