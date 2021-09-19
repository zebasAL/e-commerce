import React from 'react';
import {
  Popover, Pane, Button,
} from 'evergreen-ui/';

const AllProductsBtn = () => (
  <Popover
    content={(
      <Pane width={500} height={240} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <table>
          <thead>
            <tr>
              <th>CATEGORY 1</th>
              <th>CATEGORY 2</th>
              <th>CATEGORY 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title 1</td>
              <td>Title 1</td>
              <td>Title 1</td>
            </tr>
            <tr>
              <td>Title 2</td>
              <td>Title 2</td>
              <td>Title 2</td>
            </tr>
            <tr>
              <td>Title 3</td>
              <td>Title 3</td>
              <td>Title 3</td>
            </tr>
          </tbody>
        </table>
      </Pane>
  )}
  >
    <Button>SHOP</Button>
  </Popover>
);

export default AllProductsBtn;
