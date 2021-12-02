import React, {Component} from 'react';
import MyTable from '../../components/MyTable';


interface SalesManagementProps {

}
interface SalesManagementState {

}
class SalesManagement extends Component <SalesManagementProps, SalesManagementState>{
    public constructor(props : SalesManagementProps) {
        super(props)
    }

    public render() : JSX.Element {
        return (
            <div>
              <MyTable></MyTable>
            </div>
        )
    }
}
export default SalesManagement;