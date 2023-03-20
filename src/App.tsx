import useFetch from './hooks/useFetch'
function App() {
    const {} = useFetch({ url: '' })
    return (
        <div>
            <h1 style={{ fontFamily: 'Proxima Nova' }}>React app / ts</h1>
        </div>
    )
}

export default App
