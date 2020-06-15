# Protected Routes

Example:
```jsx
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const ProtectedRoute = ({ exact = false, path, component, roles }) => {
  const {
    isAuthenticated,
    user: { role_id: roleId }
  } = useSelector((reduxState) => reduxState.userReducer)

  const location = useLocation()

  const checkRole = (roles) => {
    if (roles) {
      return roles?.includes(roleId)
    }

    return true
  }

  return (
    <>
      {isAuthenticated && checkRole(roles) ? (
        <Route exact={exact} path={path} component={component} />
      ) : (
        <Redirect
          to={{
            pathname: location?.state?.from ? location?.state?.from : '/' ,
            state: { from: location.pathname }
          }}
        />
      )}
    </>
  )
}

export default ProtectedRoute

```

Used to protect front end routes from unauthenticated, or unauthorized users. I don't have any specific resources for this, you can find a lot of articles and YouTube videos on the topic if you want more exposure to it.

# DISCALIMER
These topics are by no means required. They are simply alternate ways to do the same things that you all know already. Only dive into these topics if you are wanting to, but be sure that it does not bog you down and prevent you from completing a personal project and/or from giving your all in your group project.

## React Router Hooks
The only example of the React Router hooks is useLocation. To learn more visit [React Router Docs: Hooks](https://reacttraining.com/react-router/web/api/Hooks).


## React Redux Hooks
I used both useSelector and useDispatch, but you can visit the docs [here](https://react-redux.js.org/api/hooks#hooks) to learn more about the specifics.

## Absolute Imports
Some of you may have noticed that my imports were not relative.

Example: 
```js
import ProtectedRoute from 'utils/ProtectedRoute' // Absolute
// instead of
import ProtectedRoute from '../../../utils/ProtectedRoute' // Relative. They can become quite hard to manage once you get into bigger projects.
```

Visit [React Docs: Absolute Imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports) to learn more.

## React Custom Hooks
I honestly have very little experience with writing these and have been trying to find spots where I can implement them so that I can learn more about them. Odds are this will be difficult topic you have to revisit a lot (speaking from experience). Don't spend much time on this one, more just food for thought and showing you that there is still **A LOT** left to learn about React.

The two that I wrote are probably not that good, but they basic examples of how/why you might want to use custom hooks. `useAxios` and `useForm` are both located in the `hooks` folder of the `src` directory

Also, the odds of getting a job where they want you to write custom hooks might be kind of low, so this should be a pretty low priorty. Learn more at [React Docs: Custom Hooks](https://reactjs.org/docs/hooks-custom.html)

## Optional Chaining
Support for optional chaining can be limited, so be wary of that when implementing it into projects. If you should like to learn more about it, visit [Optional Chaning MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
