import { connect } from 'react-redux'
import UserAvatarDropDown from '../features/UserAvatarDropDown/UserAvatarDropDown'
import AuthService from '../../services/AuthService'

const mapStateToProps = (state) => {
  return {
    user: state.account.metadata
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLogOut: () => {
      AuthService.logout();
      dispatch()
    }
  }
}

const UserAvatarDropDownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAvatarDropDown)

export default UserAvatarDropDownContainer
