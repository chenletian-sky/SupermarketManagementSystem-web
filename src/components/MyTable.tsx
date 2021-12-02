import React, {Component} from 'react';
import { Table, Input, Button, Space, Modal, Descriptions } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table';

const data: Array<any> = [];
for(let i=0;i<100;i++){
  data.push({
    key:String(i),
    orderNumber:String(i),
    customerId:'A' + i,
    amountOfGoods:parseInt(Math.random()*100 + 10 + '',10),
    totalPrice:parseInt(Math.random()*4 + 6+""  ,10)*parseInt(Math.random()*100 + 10 + '',10)
  })
}

interface MyTableProps {

}
interface MyTableState {
  searchText:string,
  searchedColumn:string,
  detailModelVisible:boolean,
  editModelVisible:boolean
}
class MyTable extends Component <MyTableProps, MyTableState>{
    public constructor(props : MyTableProps) {
        super(props)
        this.state = {
          searchText: '',
          searchedColumn: '',
          detailModelVisible:false,
          editModelVisible:false
        };
    }

    getColumnSearchProps = (dataIndex: string) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters } : any) => (
        <div style={{ padding: 8 }}>
          <Input
            // ref={node => {
            //   this.searchInput = node;
            // }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                this.setState({
                  searchText: selectedKeys[0],
                  searchedColumn: dataIndex,
                });
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value: string, record: { [x: string]: { toString: () => string; }; }) =>
        record[dataIndex]
          ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
          : '',
      // onFilterDropdownVisibleChange: (visible: any) => {
      //   if (visible) {
      //     setTimeout(() => this.searchInput.select(), 100);
      //   }
      // },
      render: (text: { toString: () => string; }) =>
        this.state.searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });

    handleSearch = (selectedKeys: any[], confirm: () => void, dataIndex: string) => {
      confirm();
      this.setState({
        searchText: selectedKeys[0],
        searchedColumn: dataIndex,
      });
    };
  
    handleReset = (clearFilters: () => void) => {
      clearFilters();
      this.setState({ searchText: '' });
    };

    public render() : JSX.Element {
      const columns = [
        {
          title: '订单编号',
          dataIndex: 'orderNumber',
          key: 'orderNumber',
          // width: '10%',
          ...this.getColumnSearchProps('orderNumber'),
        },
        {
          title: '顾客编号',
          dataIndex: 'customerId',
          key: 'customerId',
          // width: '10%',
          ...this.getColumnSearchProps('customerId'),
        },
        {
          title: '商品数量',
          dataIndex: 'amountOfGoods',
          key: 'amountOfGoods',
          // width: '20%',
          ...this.getColumnSearchProps('amountOfGoods'),
        },
        {
          title: '总价',
          dataIndex: 'totalPrice',
          key: 'totalPrice',
          ...this.getColumnSearchProps('totalPrice'),
          sorter: (a: { totalPrice: number  }, b: { totalPrice: number  }) => a.totalPrice - b.totalPrice,
          sortDirections: ['descend', 'ascend'],
        },{
          title:"操作",
          key:"action",
          align:"center",
          render:  (text: any,record: any,index: any) => {
            return <Space>
              <a
                // href="hahas"
                onClick = {(value) => {
                  console.log("mytable",text,record,index)
                  
                  this.setState({
                    detailModelVisible:true
                  })
                }}
              >详情</a>
              <a
              
              >删除</a>
              <a
                onClick = {() => {
                  this.setState({
                    editModelVisible:true
                  })
                }}
              >编辑</a>
            </Space>
          }
        }
      ];
      const { detailModelVisible , editModelVisible } = this.state
        return (
            <>
              <Table columns={columns as ColumnsType<any>} dataSource={data} />
              {
                detailModelVisible ? (<Modal
                  title="订单详情"
                  width={400}
                  visible={detailModelVisible}
                  closable={false}
                  onCancel={() => {
                    this.setState({ detailModelVisible: false });
                  }}
                  //  onOk={this.handleSubmit} 
                  className="detail-modal"
                  forceRender
                >
                  <Descriptions title="orderInfo" bordered>
                    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                    
                    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                  </Descriptions>
                </Modal>) : ''
              }
              {
                editModelVisible ? (<Modal
                  title="订单编辑"
                  width={400}
                  visible={editModelVisible}
                  closable={false}
                  onCancel={() => {
                    this.setState({ editModelVisible: false });
                  }}
                  //  onOk={this.handleSubmit} 
                  className="edit-modal"
                  forceRender
                >

                </Modal>) : ''
              }
            </>
              
        )
    }
}
export default MyTable;