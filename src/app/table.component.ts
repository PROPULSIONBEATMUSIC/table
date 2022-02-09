import { Component } from "@angular/core";

@Component({
    selector: "table-comp",
    template: `
        <div class = table>
            <h2>Table</h2>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </div>
    `,
    styles: [`
        .tr {
            width: 100px;
            height: 200px;
        }
        td {
            border: 1px solid grey;
        }
        th {
            border: 1px solid grey;
        }
        table {
            width: 500px;
            border: 1px solid grey;
        }
    `]
})


export class Tab {}