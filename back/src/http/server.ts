import fastify from 'fastify';
import cors from '@fastify/cors'

import {user_registration} from './rotas/user-registration';
import {search_user} from './rotas/search-user';
import {user_login} from './rotas/user-login'
import { artists_registration } from './rotas/artists-registration';
import { search_artists } from './rotas/search-artists';
import { search_artists_id } from './rotas/search-artists-id';
import { contract_registration } from './rotas/contract-registration';
import { search_contract } from './rotas/search-contract';
import { search_artist_name } from './rotas/search-artist-name';

const APP = fastify();

APP.register(cors, { })

APP.register(user_registration);
APP.register(search_user);
APP.register(user_login);
APP.register(artists_registration);
APP.register(search_artists);
APP.register(search_artists_id);
APP.register(contract_registration);
APP.register(search_contract);
APP.register(search_artist_name);

APP.listen({port: 3333}).then(function(){
    console.log('SERVIDOR HTTP ESTÁ RODANDO CORRETAMENTE.');
});