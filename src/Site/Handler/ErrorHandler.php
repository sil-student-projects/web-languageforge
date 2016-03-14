<?php

namespace Site\Handler;

use Symfony\Component\HttpFoundation\Response;
use Silex\Application;

class ErrorHandler
{
    public static function response(\Exception $e, $code, Application $app) {
        switch ($code) {
            case 404:
                return $app['twig']->render('error404.twig', array());
                break;
            default:
                return new Response('We are sorry, something went wrong.');
        }
    }
}