function CallApi() {
    // fetch('http://localhost/api/customers')
    //     .then((res) => res.json())
    //     .then(console.log);

    res = await fetch('http://localhost/api/customers');
    data = await res.json();
    console.log("########");
    console.log(data);

    return (
        <div className="CallApi">
            <header className="CallApi-header">
                Hello CallApi!
                </header>
        </div>
    );
}

export default CallApi;