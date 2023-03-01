import React from 'react'

const DashboardPage = () => {
  return (
    <div className="card">
      <div className="cardHeader">CHATROOMS</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">Chat Room Name</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="My chat room"
          />
        </div>
        <button>Create Chat Room</button>
        <div className="chatrooms">
          <div className="chatroom">
            <div>my chat room</div>
            <div className="join">Join</div>
          </div>
          <div className="chatroom">
            <div>my chat room</div>
            <div className="join">Join</div>
          </div>
          <div className="chatroom">
            <div>my chat room</div>
            <div className="join">Join</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
