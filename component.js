class UserComponent extends React.Component {
  ...
  onSomeButtonClicked() {
    const { userId, dispatch } = this.props

    dispatch({type: 'USER_FETCH_REQUESTED', userId})
  }
  ...
}