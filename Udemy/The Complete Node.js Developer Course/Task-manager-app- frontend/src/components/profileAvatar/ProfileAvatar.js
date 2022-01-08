import React from "react";
import "./ProfileAvatar.css";
function ProfileAvatar({ user }) {
  return (
    <div className="profileAvatar">
      <img
        src={user?.imageUrl || "/images/avatar-placeholder.png"}
        alt={user?.name || "avatar"}
      />
    </div>
  );
}

export default ProfileAvatar;
