class Mouse {
    under = false
    pUnder = false

    x = null
    y = null

    pX = null
    pY = null

    left = null
    pLeft = null

    delta = null
    pDelta = null

    constructor(element) {
        this.element = element

        const update = e => {
            this.tick()
            this.x = e.clientX
            this.y = e.clientY
            this.delta = 0
            this.under = true
        }

        element.addEventListener('mousemove', e => {
            update(e)
        })
        element.addEventListener('mouseenter', e => {
            update(e)
        })
        element.addEventListener('mouseleave', e => {
            update(e)
            this.under = false
        })
        element.addEventListener('mousedown', e => {
            update(e)

            if (e.button === 0) {
                this.left = true
            }
        })
        element.addEventListener('mouseup', e => {
            update(e)

            if (e.button === 0) {
                this.left = false
            }
        })
        element.addEventListener('wheel', e => {
            update(e)
            this.delta = e.deltaY > 0 ? 1 : -1
        })
    }

    tick() {
        this.pX = this.x
        this.pY = this.y
        this.pUnder = this.under
        this.pLeft = this.left
        this.pDelta = this.delta
    }
}