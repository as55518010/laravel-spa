<?php

namespace App\Http\Proxy;


class TokenProxy {

    protected $http;

    /**
     * TokenProxy constructor.
     * @param $http
     */

    public function __construct(\GuzzleHttp\Client $http)
    {
        $this->http = $http;
    }

    public function login($email,$password)
    {
        if(auth()->attempt(['email'=>$email,'password'=>$password,'is_active'=>1])){
            return $this->proxy(
                'password',[
                    'username'=>$email,
                    'password'=>$password,
                    'scope'=>''
                    ]
                );
            }
            return Response()->json([
                'status' => false,
                'message' => 'Credentials not match'
            ],421);
    }

    public function proxy($grantType, array $data = [])
    {
        $data = array_merge($data, [
            'client_id'     => env('PASSPORT_CLIENT_ID',2),
            'client_secret' => env('PASSPORT_CLIENT_SECRET','GpHCkm6HXrBTEIS9RHExJ3pNRSIi2Do0dOxgdfVQ'),
            'grant_type'    => $grantType,
        ]);
        $response = $this->http->post($_SERVER['HTTP_HOST'].'/oauth/token', [
            'form_params' => $data,
        ]);
        $token = json_decode((string)$response->getBody(), true);

        return response()->json([
            'token'      => $token['access_token'],
            'expires_in' => $token['expires_in'],
        ])->cookie('refreshToken', $token['refresh_token'], 86400, null, null, false, true);
    }
}