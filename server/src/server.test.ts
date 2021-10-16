import rewire from "rewire"
const server = rewire("./server")
const Server = server.__get__("Server")
// @ponicode
describe("middlewares", () => {
    let inst: any

    beforeEach(() => {
        inst = new Server()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.middlewares()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("listen", () => {
    let inst: any

    beforeEach(() => {
        inst = new Server()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.listen()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("startUp", () => {
    let inst: any

    beforeEach(() => {
        inst = new Server()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.startUp()
        }
    
        expect(callFunction).not.toThrow()
    })
})
