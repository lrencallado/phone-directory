import './style.css'

import { onSubmit } from './onSubmit.js'

document.querySelector('#app').innerHTML = `
  <div>
    <form>
      <input type="text" id="name" data-testid="name" placeholder="Name"/>
      <input type="text" id="mobile" data-testid="mobile" placeholder="Mobile Number"/>
      <input type="text" id="email" data-testid="email" placeholder="Email"/>
      <button type="submit">Add Contact</button>
    </form>
  </div>

  <div id="error" data-testid="error"></div>

  <div class="card mt-5">
    <h3>Contacts Summary</h3>
    <div class="card-body">
      <table class="contacts-summary-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Mobile</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody >
        </tbody>
      </table>
    </div>
  </div>
`

onSubmit()