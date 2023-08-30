<!doctype html>
<html >
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div>
        <nav>
            <form action={{route('uploade')}}  encType="multipart/form-data">
                <h1>cfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfg</h1>
                <input
                  type="file"
                  name="image"

                />
                <div className="mt-4">
                  <button
                    type="sumbit"
                    className="mr-1 font-display py-1 px-4 bg-green-400 text-white text-sm rounded"
                  >
                    Update
                  </button>
                </div>
            </form>
        </nav>

    </div>

</body>
</html>


