const jwt = require('jsonwebtoken');

// const { JWT_SECRET: secret } = process.env; // Private key, should be kept secret

const secret = 'shared-secret'
const _options = {}
/**
 * Generates a JSONWebToken using the payload and the options.
 * The secret key is pre-determined from environmental variables.
 * @param {object} payload The data to encode.
 * @param {object} options Available fields: algorithm, expiresIn, notBefore, audience, issuer, jwtid, subject, noTimestamp, header, keyid
 * @returns {string} A promise which handles the encoded JSONWebToken in the callback.
 */
const generateToken = (payload, options = _options) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            secret,
            {
                issuer: 'api.service.com', // 서비스 제공자
                expiresIn: '1d',           // JWT 만료 기한
                ...options
            },
            (err, encoded) => {
                if (err)
                    reject(err);
                else
                    resolve(encoded);
            }
        );
    });
};

/**
 * Verifies if a given JSONWebToken is valid using the private key.
 * @param {string} token JSONWebToken to verify.
 * @param {object} options Available fields: algorithms, audience, complete, issuer, ignoreExpiration, ignoreNotBefore, subject, clockTolerance, maxAge, clockTimestamp, nonce
 * @returns {object} A promist which handles the decoded object in the callback.
 */
const verifyToken = (token, options = _options) => {
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            secret,
            {
                issuer: 'api.service.com', // 서비스 제공자
                maxAge: '1d',              // JWT 만료 기한
                ...options
            },
            (err, decoded) => {
                if (err)
                    reject(err);
                else
                    resolve(decoded);
            }
        )
    })
}

module.exports = {
    generateToken,
    verifyToken
}