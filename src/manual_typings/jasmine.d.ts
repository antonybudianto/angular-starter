declare module jasmine {
    interface Matchers {
        toContainText(text: string): boolean;
    }
}
