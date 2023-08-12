export class AuthRequiredError extends Error {
    constructor(message = 'Auth is requeired to acces this page') {
        super(message)
        this.name = 'AuthRequiredError'
    }
}