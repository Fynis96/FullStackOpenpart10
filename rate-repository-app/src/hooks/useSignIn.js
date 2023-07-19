//useMutation to send mutation to gql for logging in, return value = [signIn, result]
//authenticate mutation has a single argument: credentials: AuthenticateInput -> username; password;
//const [mutate, result] = useMutation(SIGNIN, {variables: {username:?, password:?}});