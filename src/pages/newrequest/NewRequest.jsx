import "./NewRequestList.css";
import RequestHeader from "../../pages/requestList/RequestHeader";

const NewRequestList = () => {
  return (
    <div className="new-request-list-container">
      <RequestHeader />
      <div className="header-container">
        <h1 className="page-title">New Request List</h1>
        {/* <span className="requester-name">Requester Name: xxxxxx xxxxxx</span> */}
      </div>

      <div className="form-container">
        <div className="form-row">
          <div className="form-group">
            <label>Supplier Code</label>
            <input type="text" placeholder="Enter Supplier Code" />
          </div>
          <div className="form-group">
            <label>Supplier Name</label>
            <input type="text" placeholder="Enter Supplier Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Request Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <input type="date" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequestList;
