import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import data from "../data.json";



export const DashboardDetails = () => {

    const [assets, setAssets] = useState(data);
    return (
    <>     
            <table class="visual-rating">
                <tr>
                    <td>
                    <button class="Button-Icon-Manage"> Manage</button> 
                    </td>
                    <td >
                    <button class="Button-Icon-Filter"> Filter</button>
                    </td>
                </tr>
            </table> 
        <Table striped hover size="sm"  class="table-items-tables-table--column-items Table-Full">
            <thead>
                <tr class="row-item-master-01 cr-button__text">
                    <th>
                        <span class="material-icons-outlined">
                            info
                        </span>
                    </th>
                    <th>IDs</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Confidentiality</th>
                    <th>Integretity</th>
                    <th>Availability</th>
                    <th>Rating</th>
                    <th>Datasource</th>
                </tr>
            </thead>
            <tbody>
            {assets.map((asset) => (
                <tr>
                    <td>
                        <span class="material-icons-outlined">
                        info
                        </span>
                    </td>
                    <td>5</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Data</td>
                    <td>N/A</td>
                    <td>H</td>
                    <td>L</td>
                    <td>L</td>
                    <td>TRA2021</td>
                </tr>
             ) )}
                <tr>
                    <td>
                        <span class="material-icons-outlined">
                        info
                        </span>
                    </td>
                    <td>7</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Data</td>
                    <td>H</td>
                    <td>H</td>
                    <td>L</td>
                    <td>L</td>
                    <td>TRA2021</td>
                </tr>
                <tr>
                    <td>
                        <span class="material-icons-outlined">
                        info
                        </span>
                    </td>
                    <td>10</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Data</td>
                    <td>H</td>
                    <td>H</td>
                    <td>L</td>
                    <td>L</td>
                    <td>TRA2021</td>
                </tr>
                <tr>
                    <td>
                        <span class="material-icons-outlined">
                        info
                        </span>
                    </td>
                    <td>12</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Data</td>
                    <td>L</td>
                    <td>H</td>
                    <td>L</td>
                    <td>L</td>
                    <td>TRA2021</td>
                </tr>
                <tr>
                    <td>
                        <span class="material-icons-outlined">
                        info
                        </span>
                    </td>
                    <td>16</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Data</td>
                    <td>H</td>
                    <td>H</td>
                    <td>L</td>
                    <td>L</td>
                    <td>TRA2021</td>
                </tr>
                <tr>
                    <td>
                        <span class="material-icons-outlined">
                        info
                        </span>
                    </td>
                    <td>19</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Data</td>
                    <td>H</td>
                    <td>H</td>
                    <td>L</td>
                    <td>L</td>
                    <td>TRA2021</td>
                </tr>
                <tr>
                    <td>
                        <span class="material-icons-outlined">
                        info
                        </span>
                    </td> 
                    <td>25</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Data</td>
                    <td>M</td>
                    <td>H</td>
                    <td>L</td>
                    <td>L</td>
                    <td>TRA2021</td>
                </tr>
                <tr>
                    <td>
                        <span class="material-icons-outlined">
                        info
                        </span>
                    </td>
                    <td>30</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Data</td>
                    <td>L</td>
                    <td>H</td>
                    <td>L</td>
                    <td>L</td>
                    <td>TRA2021</td>
                </tr>
            </tbody>
        </Table>    
    </>
    );
};
export default DashboardDetails;